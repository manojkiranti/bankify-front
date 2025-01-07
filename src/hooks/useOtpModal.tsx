// hooks/useOtpModal.ts
import { useState } from 'react';
import { message } from 'antd';
import { OtpModal } from '@/components/Elements';
import { useServiceOtpVerifyMutation } from '@/store/apis/coreApi';
import { displayError } from '@/utils/displayMessageUtils';

interface UseOtpModalProps {

  serviceId: string | null;
  handleServiceSubmission: () => void;
}

const useOtpModal = ({ serviceId, handleServiceSubmission }: UseOtpModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [verifyOtp, {isLoading:OtpVerifyLoading}] = useServiceOtpVerifyMutation();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleVerify = async (otp: string) => {
    try {
      await verifyOtp({otp_code:otp, pending_request_id: serviceId as string}).unwrap();
      message.success('Your request have been submitted successfully.');
      hideModal();
      handleServiceSubmission();
    } catch (error: any) {
      displayError(error)
      // message.error(error.message || 'OTP verification failed.');
    }
  };

  const OtpModalComponent = (
    <OtpModal visible={visible} onCancel={hideModal} onVerify={handleVerify} />
    
  );

  return { showModal, OtpModalComponent };
};

export default useOtpModal;
