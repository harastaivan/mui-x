import { SxProps, Theme } from '@mui/material/styles';
import { BaseTimeValidationProps, TimeValidationProps } from '../validation';
import { PickerSelectionState } from '../../hooks/usePicker/usePickerValue.types';
import { TimeStepOptions } from '../../../models';
import type { ExportedDigitalClockProps } from '../../../DigitalClock/DigitalClock.types';
import type { ExportedMultiSectionDigitalClockProps } from '../../../MultiSectionDigitalClock/MultiSectionDigitalClock.types';
import type { ExportedUseViewsOptions } from '../../hooks/useViews';
import { TimeViewWithMeridiem } from '../common';

export interface ExportedBaseClockProps<TDate>
  extends TimeValidationProps<TDate>,
    BaseTimeValidationProps {
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm?: boolean;
}

export interface BaseClockProps<TDate, TView extends TimeViewWithMeridiem>
  extends ExportedUseViewsOptions<TView>,
    ExportedBaseClockProps<TDate> {
  className?: string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value?: TDate | null;
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue?: TDate | null;
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange?: (
    value: TDate | null,
    selectionState?: PickerSelectionState,
    selectedView?: TView,
  ) => void;
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly?: boolean;
}

export interface DesktopOnlyTimePickerProps<TDate>
  extends Omit<ExportedDigitalClockProps<TDate>, 'timeStep'>,
    Omit<ExportedMultiSectionDigitalClockProps<TDate>, 'timeStep'> {
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn?: number;
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps?: TimeStepOptions;
}

interface DigitalClockOnlyBaseProps {
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled?: boolean;
}

export interface DigitalClockOnlyProps extends DigitalClockOnlyBaseProps {
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep?: number;
}

export interface MultiSectionDigitalClockOnlyProps extends DigitalClockOnlyBaseProps {
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps?: TimeStepOptions;
}
