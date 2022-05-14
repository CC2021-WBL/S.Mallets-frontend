import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

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
              <ErrorMessage
                component="p"
                name="name"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative">
              <Field
                id="lastname"
                name="lastname"
                type="text"
                placeholder={t('lastname')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="lastname"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative">
              <Field
                id="streetAndHouseNr"
                name="streetAndHouseNr"
                type="text"
                placeholder={t('streetAndHouseNr')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="streetAndHouseNr"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative">
              <Field
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder={t('postalCode')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="postalCode"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative mb-6 flex">
              <Field type="checkbox" name="condition" />
              <p className="ml-5 text-sm font-semibold">{t('aggrementText')}</p>
              <ErrorMessage
                component="p"
                name="condition"
                className="absolute top-5 text-xs text-red-600"
              />
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
