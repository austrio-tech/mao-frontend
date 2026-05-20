import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDownload = () => {
  const navigate = useNavigate();
  const hasDownloaded = useRef(false);

  useEffect(() => {
    if (hasDownloaded.current) return;
    hasDownloaded.current = true;

    // Download PDF using fetch
    fetch('/Modern_Arab_Oasis_Profile_.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Modern_Arab_Oasis_Profile.pdf';
        link.click();
        window.URL.revokeObjectURL(url);

        // Redirect back to home page
        navigate('/');
      })
      .catch(error => {
        console.error('Download failed:', error);
        navigate('/');
      });
  }, [navigate]);

  return null; // No UI to render
};

export default ProfileDownload;
