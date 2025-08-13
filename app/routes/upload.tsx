import { useState, type FormEvent } from 'react';
import { FileUploader, Navbar } from '~/components';

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget.closest('form');
    if (!form) return;
    const formData = new FormData(form);

    const companyName = formData.get('company-name');
    const jobTitle = formData.get('job-title');
    const jobDescription = formData.get('job-description');

    console.log({
      companyName,
      jobTitle,
      jobDescription,
      file,
    });

    setIsProcessing(true);
    setStatusText('Processing your resume...');
  };
  return (
    <main className='bg-[url(/images/bg-main.svg)] bg-cover bg-center bg-no-repeat'>
      <Navbar />

      <section className='main-section py-16'>
        <div className='page-heading py-16'>
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src='/images/resume-scan.gif' alt='w-full' />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}
          {!isProcessing && (
            <form
              id='upload-form'
              onSubmit={handleSubmit}
              className='flex flex-col gap-4 mt8'
            >
              <div className='form-div'>
                <label htmlFor='company-name'>Company Name</label>
                <input
                  type='text'
                  name='company-name'
                  placeholder='Company Name'
                  id='company-name'
                />
              </div>
              <div className='form-div'>
                <label htmlFor='job-title'>Job Title</label>
                <input
                  type='text'
                  name='job-title'
                  placeholder='Job Titile'
                  id='job-title'
                />
              </div>
              <div className='form-div'>
                <label htmlFor='job-description'>Job Description</label>
                <textarea
                  rows={5}
                  name='job-description'
                  placeholder='Job Description'
                  id='job-description'
                />
              </div>
              <div className='form-div'>
                <label htmlFor='job-title'>Upload Resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>
              <button className='primary-button' type='submit'>
                Analize Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
