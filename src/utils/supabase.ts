export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      AppCategory: {
        Row: {
          app_category_name: string
          created_by: string | null
          id: number
          image_active: string
          image_inactive: string
          isNew: boolean
          status: string | null
          test: string | null
        }
        Insert: {
          app_category_name: string
          created_by?: string | null
          id: number
          image_active: string
          image_inactive: string
          isNew: boolean
          status?: string | null
          test?: string | null
        }
        Update: {
          app_category_name?: string
          created_by?: string | null
          id?: number
          image_active?: string
          image_inactive?: string
          isNew?: boolean
          status?: string | null
          test?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "AppCategory_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Application: {
        Row: {
          app_appstore: string | null
          app_branding: string
          app_color: string
          app_copyright: string
          app_country: string
          app_locked: boolean
          app_logo: string
          app_mockup: string
          app_name: string
          app_new: boolean
          app_playstore: string | null
          app_provider: string
          app_rating: string | null
          app_type: string | null
          app_version: string | null
          contributor: string | null
          id: number
          sub_category: string | null
          web: string | null
        }
        Insert: {
          app_appstore?: string | null
          app_branding: string
          app_color: string
          app_copyright: string
          app_country: string
          app_locked: boolean
          app_logo: string
          app_mockup: string
          app_name: string
          app_new: boolean
          app_playstore?: string | null
          app_provider: string
          app_rating?: string | null
          app_type?: string | null
          app_version?: string | null
          contributor?: string | null
          id: number
          sub_category?: string | null
          web?: string | null
        }
        Update: {
          app_appstore?: string | null
          app_branding?: string
          app_color?: string
          app_copyright?: string
          app_country?: string
          app_locked?: boolean
          app_logo?: string
          app_mockup?: string
          app_name?: string
          app_new?: boolean
          app_playstore?: string | null
          app_provider?: string
          app_rating?: string | null
          app_type?: string | null
          app_version?: string | null
          contributor?: string | null
          id?: number
          sub_category?: string | null
          web?: string | null
        }
        Relationships: []
      }
      Application_duplicate: {
        Row: {
          app_appstore: string
          app_branding: string
          app_color: string
          app_copyright: string
          app_country: string
          app_locked: boolean
          app_logo: string
          app_mockup: string
          app_name: string
          app_new: boolean
          app_playstore: string
          app_provider: string
          app_rating: string
          app_type: string
          app_version: string
          contributor: string | null
          id: number
          web: string | null
        }
        Insert: {
          app_appstore: string
          app_branding: string
          app_color: string
          app_copyright: string
          app_country: string
          app_locked: boolean
          app_logo: string
          app_mockup: string
          app_name: string
          app_new: boolean
          app_playstore: string
          app_provider: string
          app_rating: string
          app_type: string
          app_version: string
          contributor?: string | null
          id: number
          web?: string | null
        }
        Update: {
          app_appstore?: string
          app_branding?: string
          app_color?: string
          app_copyright?: string
          app_country?: string
          app_locked?: boolean
          app_logo?: string
          app_mockup?: string
          app_name?: string
          app_new?: boolean
          app_playstore?: string
          app_provider?: string
          app_rating?: string
          app_type?: string
          app_version?: string
          contributor?: string | null
          id?: number
          web?: string | null
        }
        Relationships: []
      }
      CategoriesOnApps: {
        Row: {
          app_id: number
          category: string | null
          category_id: number
          id: number
        }
        Insert: {
          app_id: number
          category?: string | null
          category_id: number
          id?: number
        }
        Update: {
          app_id?: number
          category?: string | null
          category_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "CategoriesOnApps_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "Application"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CategoriesOnApps_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "AppCategory"
            referencedColumns: ["id"]
          },
        ]
      }
      contributor: {
        Row: {
          app_id: number | null
          id: number
          profile_id: string | null
        }
        Insert: {
          app_id?: number | null
          id?: number
          profile_id?: string | null
        }
        Update: {
          app_id?: number | null
          id?: number
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contributor_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "Application"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributor_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      Contributor: {
        Row: {
          contributor_id: number | null
          id: number
          name: string | null
        }
        Insert: {
          contributor_id?: number | null
          id?: number
          name?: string | null
        }
        Update: {
          contributor_id?: number | null
          id?: number
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Contributor_contributor_id_fkey"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "Application"
            referencedColumns: ["id"]
          },
        ]
      }
      country: {
        Row: {
          created_at: string
          id: number
          logo: string | null
          name: string | null
        }
        Insert: {
          created_at: string
          id?: number
          logo?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          logo?: string | null
          name?: string | null
        }
        Relationships: []
      }
      Image: {
        Row: {
          app_id: number | null
          id: number
          image_app_name: string | null
          image_branding: string | null
          image_category_id: number
          image_country: string | null
          image_flow_category: string | null
          image_flow_number: string | null
          image_id: number
          image_language: string | null
          image_name: string | null
          image_screen: string | null
          image_url: string
        }
        Insert: {
          app_id?: number | null
          id?: number
          image_app_name?: string | null
          image_branding?: string | null
          image_category_id: number
          image_country?: string | null
          image_flow_category?: string | null
          image_flow_number?: string | null
          image_id: number
          image_language?: string | null
          image_name?: string | null
          image_screen?: string | null
          image_url: string
        }
        Update: {
          app_id?: number | null
          id?: number
          image_app_name?: string | null
          image_branding?: string | null
          image_category_id?: number
          image_country?: string | null
          image_flow_category?: string | null
          image_flow_number?: string | null
          image_id?: number
          image_language?: string | null
          image_name?: string | null
          image_screen?: string | null
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "Image_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "Application"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Image_image_name_fkey"
            columns: ["image_name"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["name"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      rolesonprofile: {
        Row: {
          id: number
          profile_id: string | null
          roles_id: number | null
        }
        Insert: {
          id?: number
          profile_id?: string | null
          roles_id?: number | null
        }
        Update: {
          id?: number
          profile_id?: string | null
          roles_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rolesonprofile_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rolesonprofile_roles_id_fkey"
            columns: ["roles_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      SharedLink: {
        Row: {
          count: number
          id: number
          social_media_name: string
        }
        Insert: {
          count: number
          id?: number
          social_media_name: string
        }
        Update: {
          count?: number
          id?: number
          social_media_name?: string
        }
        Relationships: []
      }
      SubCategory: {
        Row: {
          categories_name: string | null
          id: number
        }
        Insert: {
          categories_name?: string | null
          id?: number
        }
        Update: {
          categories_name?: string | null
          id?: number
        }
        Relationships: []
      }
      SubCateogriesOnApp: {
        Row: {
          app_id: number | null
          id: number
          sub_categories_id: number | null
        }
        Insert: {
          app_id?: number | null
          id?: number
          sub_categories_id?: number | null
        }
        Update: {
          app_id?: number | null
          id?: number
          sub_categories_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "SubCateogriesOnApp_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "Application"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SubCateogriesOnApp_sub_categories_id_fkey"
            columns: ["sub_categories_id"]
            isOneToOne: false
            referencedRelation: "SubCategory"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      connect_image: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  realtime: {
    Tables: {
      messages: {
        Row: {
          extension: string
          id: number
          inserted_at: string
          topic: string
          updated_at: string
        }
        Insert: {
          extension: string
          id?: number
          inserted_at: string
          topic: string
          updated_at: string
        }
        Update: {
          extension?: string
          id?: number
          inserted_at?: string
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      schema_migrations: {
        Row: {
          inserted_at: string | null
          version: number
        }
        Insert: {
          inserted_at?: string | null
          version: number
        }
        Update: {
          inserted_at?: string | null
          version?: number
        }
        Relationships: []
      }
      subscription: {
        Row: {
          claims: Json
          claims_role: unknown
          created_at: string
          entity: unknown
          filters: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
          id: number
          subscription_id: string
        }
        Insert: {
          claims: Json
          claims_role?: unknown
          created_at?: string
          entity: unknown
          filters?: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
          id?: never
          subscription_id: string
        }
        Update: {
          claims?: Json
          claims_role?: unknown
          created_at?: string
          entity?: unknown
          filters?: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
          id?: never
          subscription_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      apply_rls: {
        Args: {
          wal: Json
          max_record_bytes?: number
        }
        Returns: Database["realtime"]["CompositeTypes"]["wal_rls"][]
      }
      build_prepared_statement_sql: {
        Args: {
          prepared_statement_name: string
          entity: unknown
          columns: Database["realtime"]["CompositeTypes"]["wal_column"][]
        }
        Returns: string
      }
      cast: {
        Args: {
          val: string
          type_: unknown
        }
        Returns: Json
      }
      check_equality_op: {
        Args: {
          op: Database["realtime"]["Enums"]["equality_op"]
          type_: unknown
          val_1: string
          val_2: string
        }
        Returns: boolean
      }
      is_visible_through_filters: {
        Args: {
          columns: Database["realtime"]["CompositeTypes"]["wal_column"][]
          filters: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
        }
        Returns: boolean
      }
      list_changes: {
        Args: {
          publication: unknown
          slot_name: unknown
          max_changes: number
          max_record_bytes: number
        }
        Returns: Database["realtime"]["CompositeTypes"]["wal_rls"][]
      }
      quote_wal2json: {
        Args: {
          entity: unknown
        }
        Returns: string
      }
      to_regrole: {
        Args: {
          role_name: string
        }
        Returns: unknown
      }
      topic: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      action: "INSERT" | "UPDATE" | "DELETE" | "TRUNCATE" | "ERROR"
      equality_op: "eq" | "neq" | "lt" | "lte" | "gt" | "gte" | "in"
    }
    CompositeTypes: {
      user_defined_filter: {
        column_name: string | null
        op: Database["realtime"]["Enums"]["equality_op"] | null
        value: string | null
      }
      wal_column: {
        name: string | null
        type_name: string | null
        type_oid: unknown | null
        value: Json | null
        is_pkey: boolean | null
        is_selectable: boolean | null
      }
      wal_rls: {
        wal: Json | null
        is_rls_enabled: boolean | null
        subscription_ids: string[] | null
        errors: string[] | null
      }
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          user_metadata: Json | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          user_metadata: Json | null
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          user_metadata?: Json | null
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          user_metadata?: Json | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "s3_multipart_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
        }
        Returns: {
          key: string
          id: string
          created_at: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          start_after?: string
          next_token?: string
        }
        Returns: {
          name: string
          id: string
          metadata: Json
          updated_at: string
        }[]
      }
      operation: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
