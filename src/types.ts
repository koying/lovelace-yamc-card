import { ActionConfig } from 'custom-card-helpers';

// TODO Add your configuration elements here for type-checking

export interface MediaCardDetailsConfig {
  type: string;
  name?: string;
  entity: string;
}

export interface MediaCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;

  image_style?: string;
  max?: number;
  date?: string;
  clock?: number;
  hide_flagged?: boolean;
  hide_unflagged?: boolean;
  flag?: boolean;
  flag_color?: string;
  icon_hide?: boolean;

  title_text?: string;
  line1_text?: string;
  line2_text?: string;
  line3_text?: string;
  line4_text?: string;
  line5_text?: string;

  title_size?: string;
  line1_size?: string;
  line2_size?: string;
  line3_size?: string;
  line4_size?: string;
  line5_size?: string;
  line_size?: string;

  title_color?: string;
  line1_color?: string;
  line2_color?: string;
  line3_color?: string;
  line4_color?: string;
  line5_color?: string;
  line_color?: string;

  text_link?: string;
  link?: string;
}
