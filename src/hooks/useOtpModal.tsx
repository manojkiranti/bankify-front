// hooks/useOtpModal.ts
import { useState } from 'react';
import { message } from 'antd';
import { OtpModal } from '@/components/Elements';

interface UseOtpModalProps {
  onSubmitOtp: (otp: string) => Promise<void>;
}

const useOtpModal = ({ onSubmitOtp }: UseOtpModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleVerify = async (otp: string) => {
    try {
      await onSubmitOtp(otp);
      message.success('Your request have been submitted successfully.');
      hideModal();
    } catch (error: any) {
      message.error(error.message || 'OTP verification failed.');
    }
  };

  const OtpModalComponent = (
    <OtpModal visible={visible} onCancel={hideModal} onVerify={handleVerify} />
    
  );

  return { showModal, OtpModalComponent };
};

export default useOtpModal;
