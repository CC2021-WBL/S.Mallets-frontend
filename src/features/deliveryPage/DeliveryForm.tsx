import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import Error from './Error';
import LogoCarpet from '../../tools/LogoCarpet';

const DeliveryForm = () => {
  const { t } = useTranslation('deliveryForm');

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('errNoName'))
      .min(3, t('errName'))
      .max(15, t('errName2')),
    lastname: Yup.string()
      .required(t('errNoLastname'))
      .min(3, t('errLastname'))
      .max(15, t('errLastname2')),
    streetAndHouseNr: Yup.string()
      .required(t('errNoStreetAndHouseNr'))
      .min(6, t('errStreetAndHouseNr')),
    postalCode: Yup.string()
      .required(t('errNoPostalCode'))
      .min(4, t('errPostalCode')),
    condition: Yup.boolean().oneOf([true], t('errCondition')),
    city: Yup.string().required(t('errNoCity')).min(4, t('errCity')),
    country: Yup.string().required(t('errNoCountry')).min(4, t('errCountry')),
    phoneNumber: Yup.string()
      .required(t('errNoPhoneNumber'))
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t('errPhoneNumber'),
      ),
    additional: Yup.string().max(120, t('errAdditional')),
  });

  return (
    <div className="relative mx-auto mb-3 w-full max-w-7xl p-6 md:p-12">
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          streetAndHouseNr: '',
          postalCode: '',
          condition: false,
          city: '',
          country: '',
          phoneNumber: '',
          additional: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log('dupa');
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 6));
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
                id="streetAndHouseNr"
                name="streetAndHouseNr"
                type="text"
                placeholder={t('streetAndHouseNr')}
                className="form-input"
              ></Field>
              <Error name="streetAndHouseNr" />
            </div>
            <div className="relative">
              <Field
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder={t('postalCode')}
                className="form-input"
              ></Field>
              <Error name="postalCode" />
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
                name="additional"
                component="textarea"
                placeholder={`${t('additional')}`}
                className="mb-6 h-32 w-full border-b border-black bg-[#ededed] p-4 focus:border-transparent focus:outline focus:outline-2 focus:outline-black sm:w-96"
              />

              <Error name="additional" className="top-32" />
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
