import { useActionData, useNavigate, useNavigation } from 'react-router-dom';

export function useForm() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const errors = useActionData() as Record<string, string>;

  const isSubmitting = navigation.state === 'submitting';

  const handleCancel = () => {
    navigate(-1);
  };

  const isBtnDisabled = isSubmitting;
  const btnText = (defaultText: string) => {
    return isSubmitting ? 'Saving...' : defaultText;
  };

  return { errors, isBtnDisabled, btnText, handleCancel };
}
