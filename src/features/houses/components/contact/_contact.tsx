import * as React from 'react';
import styles from './_contact.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, TextInput } from '../../../../components';

const schema = yup
  .object({
    fullname: yup.string().required('Fullname is required'),
    email: yup
      .string()
      .email('must be a valid email')
      .required('A email is required'),
    phone: yup
      .number()
      .typeError('Must be a number')
      .required('Phone is required'),
    comment: yup.string().required('A comment is required'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const HouseDetailContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div id='house-contact-form' className={styles['contact-wrapper']}>
      <div id='house-contact-form-header' className={styles['contact-header']}>
        Contact Agent
      </div>
      <div id='house-contact-form-inputs'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles['contact-form']}
        >
          <TextInput
            {...register('fullname')}
            placeholder='FullName *'
            error={errors.fullname?.message}
          />
          <TextInput
            {...register('email')}
            placeholder='Email *'
            error={errors.email?.message}
          />
          <TextInput
            {...register('phone')}
            placeholder='Phone Number *'
            error={errors.phone?.message}
          />
          <TextInput
            {...register('comment')}
            placeholder='Comments *'
            error={errors.comment?.message}
          />
          <Button label='Contact now' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default HouseDetailContactForm;
