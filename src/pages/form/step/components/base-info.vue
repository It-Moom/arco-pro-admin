<template>
  <AcroDynamicForm
    ref="formRef"
    class="w-125!"
    :model="formData"
    :fields="fields"
    :show-reset-button="false"
    :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }"
    :submit-button-text="$t('stepForm.button.next')"
    @submit="onNextClick"
  />
</template>

<script lang="ts" setup>
  import type { AcroDynamicFormInstance } from '@mixte/snippets/acro-dynamic-form';
  import { AcroDynamicForm, defineAcroDynamicFormFields } from '@mixte/snippets/acro-dynamic-form';
  import type { BaseInfoModel } from '@/apis/form';

  const emits = defineEmits(['changeStep']);

  const { t } = useI18n();

  const formRef = ref<AcroDynamicFormInstance>();
  const formData = ref<BaseInfoModel>({
    activityName: '',
    channelType: '',
    promotionTime: [],
    promoteLink: 'https://arco.design',
  });

  const fields = defineAcroDynamicFormFields([
    {
      field: 'activityName',
      label: t('stepForm.form.label.activityName'),
      rules: [
        { required: true, message: t('stepForm.form.error.activityName.required') },
        { match: /^[a-zA-Z0-9\u4E00-\u9FA5]{1,20}$/, message: t('stepForm.form.error.activityName.pattern') },
      ],
      type: 'input',
      componentProps: {
        placeholder: t('stepForm.placeholder.activityName'),
      },
    },
    {
      field: 'channelType',
      label: t('stepForm.form.label.channelType'),
      rules: [{ required: true, message: t('stepForm.form.error.channelType.required') }],
      type: 'select',
      componentProps: {
        placeholder: t('stepForm.placeholder.channelType'),
        options: [{ label: 'APP通用渠道', value: 'APP通用渠道' }],
      },
    },
    {
      field: 'promotionTime',
      label: t('stepForm.form.label.promotionTime'),
      rules: [{ required: true, message: t('stepForm.form.error.promotionTime.required') }],
      type: 'range-picker',
    },
    {
      field: 'promoteLink',
      label: t('stepForm.form.label.promoteLink'),
      rules: [
        { required: true, message: t('stepForm.form.error.promoteLink.required') },
        { type: 'url', message: t('stepForm.form.error.promoteLink.pattern') },
      ],
      formItemProps: {
        rowClass: 'mb-5!',
        help: t('stepForm.form.tip.promoteLink'),
      },
      type: 'input',
      componentProps: {
        placeholder: t('stepForm.placeholder.promoteLink'),
      },
    },
  ]);

  async function onNextClick() {
    if (!(await formRef.value?.validate()))
      emits('changeStep', 'forward', { ...formData.value });
  }
</script>
