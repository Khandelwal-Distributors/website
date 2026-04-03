import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const SERVICEABLE_REGEX = /^2[0-8]\d{4}$/;

interface PincodeCheckerProps {
    onServiceabilityChange?: (isServiceable: boolean) => void;
    compact?: boolean;
}

export default function PincodeChecker({ onServiceabilityChange, compact = false }: PincodeCheckerProps) {
    const [pincode, setPincode] = useState(() => {
        return localStorage.getItem('kd_pincode') || '';
    });
    const [status, setStatus] = useState<'idle' | 'checking' | 'serviceable' | 'not-serviceable'>(() => {
        const saved = localStorage.getItem('kd_pincode');
        if (saved && SERVICEABLE_REGEX.test(saved)) return 'serviceable';
        if (saved && saved.length === 6) return 'not-serviceable';
        return 'idle';
    });

    useEffect(() => {
        onServiceabilityChange?.(status === 'serviceable');
    }, [status, onServiceabilityChange]);

    const checkPincode = () => {
        const trimmed = pincode.trim();
        if (trimmed.length !== 6 || !/^\d{6}$/.test(trimmed)) {
            setStatus('idle');
            return;
        }

        setStatus('checking');

        // Simulate a brief check delay for UX
        setTimeout(() => {
            if (SERVICEABLE_REGEX.test(trimmed)) {
                setStatus('serviceable');
                localStorage.setItem('kd_pincode', trimmed);
            } else {
                setStatus('not-serviceable');
                localStorage.setItem('kd_pincode', trimmed);
            }
        }, 300);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            checkPincode();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setPincode(value);
        if (value.length < 6) {
            setStatus('idle');
        }
    };

    return (
        <div className={compact ? 'space-y-2' : 'space-y-3'}>
            <div className="flex items-center gap-2">
                <MapPin className={`${compact ? 'h-4 w-4' : 'h-5 w-5'} text-primary flex-shrink-0`} />
                <span className={`font-medium ${compact ? 'text-sm' : 'text-base'}`}>
                    Check Delivery Availability
                </span>
            </div>

            <div className="flex gap-2">
                <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter 6-digit pincode"
                    value={pincode}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={`${compact ? 'h-9 text-sm' : 'h-10'} max-w-[180px]`}
                    maxLength={6}
                />
                <Button
                    variant="outline"
                    size={compact ? 'sm' : 'default'}
                    onClick={checkPincode}
                    disabled={pincode.length !== 6 || status === 'checking'}
                    className={compact ? 'h-9' : 'h-10'}
                >
                    {status === 'checking' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        'Check'
                    )}
                </Button>
            </div>

            {/* Status messages */}
            {status === 'serviceable' && (
                <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    <span className={`font-medium ${compact ? 'text-xs' : 'text-sm'}`}>
                        Delivery available to {pincode}! (Delhi & UP)
                    </span>
                </div>
            )}

            {status === 'not-serviceable' && (
                <div className="flex items-center gap-2 text-red-500">
                    <XCircle className="h-4 w-4 flex-shrink-0" />
                    <span className={`font-medium ${compact ? 'text-xs' : 'text-sm'}`}>
                        Sorry, we don't deliver to {pincode} yet. We currently serve Delhi & UP only.
                    </span>
                </div>
            )}
        </div>
    );
}

export { SERVICEABLE_REGEX };
