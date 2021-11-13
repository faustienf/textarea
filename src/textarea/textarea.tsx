import React, {
  ChangeEvent,
  FC,
  memo,
  TextareaHTMLAttributes,
} from 'react';
import { TextareaBreakLines } from './textarea-break-lines';
import './textarea.css';

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>
type Props = TextareaProps & {
  value?: string;
  minRow?: number;
  maxLimit?: number;
  onChange?: (nextValue: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<Props> = (props) => {
  const {
    value = '',
    minRow = 0,
    maxLimit,
    onChange,
    ...rest
  } = props;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  const minHeight = minRow * 20 + 2 + 32; // line-height + borderY + paddingY

  return (
    <div className="textarea" style={{ minHeight }}>
      <div
        className="textarea-target"
        data-view="hidden"
      >
        <TextareaBreakLines value={value} />
      </div>
      <textarea
        {...rest}
        value={value}
        className="textarea-target"
        data-view="native"
        onChange={handleChange}
      />

      {maxLimit && (
        <span
          className="textarea-max-limit"
          data-invalid={value.length > maxLimit}
        >
          {`${value.length}/${maxLimit}`}
        </span>
      )}
    </div>
  );
};

const TextareaMemo = memo(Textarea);
export { TextareaMemo as Textarea };
