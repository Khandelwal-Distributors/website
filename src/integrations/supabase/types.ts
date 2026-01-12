export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      brands: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          access_token: string | null
          cashfree_order_id: string | null
          created_at: string
          customer_address: string
          customer_city: string
          customer_email: string
          customer_email_verified: boolean | null
          customer_name: string
          customer_phone: string
          customer_pincode: string
          customer_state: string | null
          delivery_date: string | null
          id: string
          notes: string | null
          order_date: string
          payment_id: string | null
          payment_method: string | null
          payment_status: string | null
          product_id: string
          quantity: number | null
          status: string | null
          total_amount: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          access_token?: string | null
          cashfree_order_id?: string | null
          created_at?: string
          customer_address: string
          customer_city: string
          customer_email: string
          customer_email_verified?: boolean | null
          customer_name: string
          customer_phone: string
          customer_pincode: string
          customer_state?: string | null
          delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          payment_id?: string | null
          payment_method?: string | null
          payment_status?: string | null
          product_id: string
          quantity?: number | null
          status?: string | null
          total_amount: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          access_token?: string | null
          cashfree_order_id?: string | null
          created_at?: string
          customer_address?: string
          customer_city?: string
          customer_email?: string
          customer_email_verified?: boolean | null
          customer_name?: string
          customer_phone?: string
          customer_pincode?: string
          customer_state?: string | null
          delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          payment_id?: string | null
          payment_method?: string | null
          payment_status?: string | null
          product_id?: string
          quantity?: number | null
          status?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string
          created_at: string
          description: string | null
          discount_percent: number | null
          energy_rating: string | null
          features: string[] | null
          id: string
          image_urls: string[] | null
          is_available: boolean | null
          is_featured: boolean | null
          model: string
          name: string
          original_price: number | null
          price: number
          review_count: number | null
          seo_description: string | null
          seo_title: string | null
          series: string | null
          slug: string
          specifications: Json | null
          star_rating: number | null
          tonnage: number
          updated_at: string
          warranty_years: number | null
        }
        Insert: {
          brand: string
          created_at?: string
          description?: string | null
          discount_percent?: number | null
          energy_rating?: string | null
          features?: string[] | null
          id?: string
          image_urls?: string[] | null
          is_available?: boolean | null
          is_featured?: boolean | null
          model: string
          name: string
          original_price?: number | null
          price: number
          review_count?: number | null
          seo_description?: string | null
          seo_title?: string | null
          series?: string | null
          slug: string
          specifications?: Json | null
          star_rating?: number | null
          tonnage: number
          updated_at?: string
          warranty_years?: number | null
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string | null
          discount_percent?: number | null
          energy_rating?: string | null
          features?: string[] | null
          id?: string
          image_urls?: string[] | null
          is_available?: boolean | null
          is_featured?: boolean | null
          model?: string
          name?: string
          original_price?: number | null
          price?: number
          review_count?: number | null
          seo_description?: string | null
          seo_title?: string | null
          series?: string | null
          slug?: string
          specifications?: Json | null
          star_rating?: number | null
          tonnage?: number
          updated_at?: string
          warranty_years?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          capacity: string | null
          client: string | null
          completion_year: number | null
          created_at: string
          description: string | null
          features: string[] | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          location: string | null
          project_type: string
          project_url: string | null
          rating: number | null
          title: string
          updated_at: string
        }
        Insert: {
          capacity?: string | null
          client?: string | null
          completion_year?: number | null
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          project_type: string
          project_url?: string | null
          rating?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          capacity?: string | null
          client?: string | null
          completion_year?: number | null
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          project_type?: string
          project_url?: string | null
          rating?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      video_content: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          sort_order: number | null
          title: string
          updated_at: string
          youtube_id: string
          youtube_url: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          sort_order?: number | null
          title: string
          updated_at?: string
          youtube_id: string
          youtube_url: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          sort_order?: number | null
          title?: string
          updated_at?: string
          youtube_id?: string
          youtube_url?: string
        }
        Relationships: []
      }
    }
    Views: {
      merchant_products: {
        Row: {
          additional_image_link: string | null
          availability: string | null
          brand: string | null
          condition: string | null
          description: string | null
          google_product_category: string | null
          gtin: string | null
          id: string | null
          image_link: string | null
          link: string | null
          mpn: string | null
          price: string | null
          sale_price: string | null
          title: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      generate_order_access_url: { Args: { order_id: string }; Returns: string }
      get_guest_order: {
        Args: { p_access_token: string; p_customer_email: string }
        Returns: {
          access_token: string | null
          cashfree_order_id: string | null
          created_at: string
          customer_address: string
          customer_city: string
          customer_email: string
          customer_email_verified: boolean | null
          customer_name: string
          customer_phone: string
          customer_pincode: string
          customer_state: string | null
          delivery_date: string | null
          id: string
          notes: string | null
          order_date: string
          payment_id: string | null
          payment_method: string | null
          payment_status: string | null
          product_id: string
          quantity: number | null
          status: string | null
          total_amount: number
          updated_at: string
          user_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "orders"
          isOneToOne: false
          isSetofReturn: true
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
