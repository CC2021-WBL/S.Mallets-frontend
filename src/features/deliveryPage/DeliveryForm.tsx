import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Error from './Error';
import LogoCarpet from '../../tools/LogoCarpet';
import { RootState } from '../../app/store';
import { deliDataActions } from './deliveryDataSlice';

const initialDeliveryFormState = {
  name: '',
  lastname: '',
  email: '',
  streetAndNumber: '',
  zipCode: '',
  condition: false,
  city: '',
  country: '',
  phoneNumber: '',
  messageFromUser: '',
};

const DeliveryForm = () => {
  const { t } = useTranslation('deliveryForm');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO: checking if authorized and user data from user Slice is there
  // if (isAuth) {
  //   const userData = useSelector((state: RootState) => state.userDataObject);
  //   const initialDeliveryValues = userData
  //     ? userData
  //     : initialDeliveryFormState;
  // }
  const deliveryData = useSelector((state: RootState) => state.deliveryData);
  const initialFormState = deliveryData
    ? { ...deliveryData, condition: false }
    : initialDeliveryFormState;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('errNoName'))
      .min(3, t('errName'))
      .max(15, t('errName2')),
    lastname: Yup.string()
      .required(t('errNoLastname'))
      .min(3, t('errLastname'))
      .max(15, t('errLastname2')),
    email: Yup.string().required(t('errNoEmail')).email(t('errEmail')),
    streetAndNumber: Yup.string()
      .required(t('errNoStreetAndNumber'))
      .min(6, t('errStreetAndNumber'))
      .max(20, t('errStreetAndNumber')),
    zipCode: Yup.string().required(t('errNoZipCode')).min(4, t('errZipCode')),
    condition: Yup.boolean().oneOf([true], t('errCondition')),
    city: Yup.string().required(t('errNoCity')).min(4, t('errCity')),
    country: Yup.string()
      .required(t('errNoCountry'))
      .min(4, t('errCountry'))
      .max(15, t('errCountry')),
    phoneNumber: Yup.string()
      .required(t('errNoPhoneNumber'))
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t('errPhoneNumber'),
      ),
    messageFromUser: Yup.string().max(120, t('errMessageFromUser')),
  });

  return (
    <div className="relative mx-auto mb-3 w-full max-w-7xl p-6 md:p-12">
      <Formik
        initialValues={initialFormState}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          dispatch(
            deliDataActions.setDeliData({
              name: values.name,
              lastname: values.lastname,
              email: values.email,
              streetAndNumber: values.streetAndNumber,
              zipCode: values.zipCode,
              city: values.city,
              country: values.country,
              phoneNumber: values.phoneNumber,
              messageFromUser: values.messageFromUser,
            }),
          );
          navigate('/cart/delivery/summary');
        }}
      >
        <Form>
          <div className="form-wrapper flex flex-col">
            <div className="relative">
              <Field
                id="name"
                name="name"
                type="text"
                placeholder={t('name')}
                className="form-input"
              ></Field>
              <Error name="name" />
            </div>
            <div className="relative">
              <Field
                id="lastname"
                name="lastname"
                type="text"
                placeholder={t('lastname')}
                className="form-input"
              ></Field>
              <Error name="lastname" />
            </div>
            <div className="relative">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={t('email')}
                className="form-input"
              ></Field>
              <Error name="email" />
            </div>
            <div className="relative">
              <Field
                id="streetAndNumber"
                name="streetAndNumber"
                type="text"
                placeholder={t('streetAndNumber')}
                className="form-input"
              ></Field>
              <Error name="streetAndNumber" />
            </div>
            <div className="relative">
              <Field
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder={t('zipCode')}
                className="form-input"
              ></Field>
              <Error name="zipCode" />
            </div>
            <div className="relative">
              <Field
                id="city"
                name="city"
                type="text"
                placeholder={t('city')}
                className="form-input"
              ></Field>
              <Error name="city" />
            </div>
            <div className="relative">
              <Field
                id="country"
                name="country"
                type="text"
                placeholder={t('country')}
                className="form-input"
              ></Field>
              <Error name="country" />
            </div>
            <div className="relative">
              <Field
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder={t('phoneNumber')}
                className="form-input"
              ></Field>
              <Error name="phoneNumber" />
            </div>
            <div className="relative">
              <Field
                name="messageFromUser"
                component="textarea"
                placeholder={`${t('messageFromUser')}`}
                className="mb-6 h-32 w-full border-b border-black bg-[#ededed] p-4 focus:border-transparent focus:outline focus:outline-2 focus:outline-black sm:w-96"
              />

              <Error name="messageFromUser" className="top-32" />
            </div>
            <div className="relative mb-6 flex">
              <Field type="checkbox" name="condition" />
              <label htmlFor="condition" className="ml-5 text-sm font-semibold">
                {t('aggrementText')}
              </label>
              <Error name="condition" className="-top-3" />
            </div>
            <button className="btn-primary">{t('confirmData')}</button>
          </div>
        </Form>
      </Formik>
      <LogoCarpet className="absolute top-12 right-8 z-[1] hidden md:block" />
    </div>
  );
};
export default DeliveryForm;
