<template>
  <a-spin :loading="loading" style="width: 100%">
    <EnterpriseCertification :enterprise-info="data.enterpriseInfo" />
    <CertificationRecords :render-data="data.record" />
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import EnterpriseCertification from './enterprise-certification.vue';
  import CertificationRecords from './certification-records.vue';
  import type {
    EnterpriseCertificationModel,
    UnitCertification,
  } from '@/apis/user-center';
  import {
    queryCertification,
  } from '@/apis/user-center';

  const { loading, setLoading } = useLoading(true);
  const data = ref<UnitCertification>({
    enterpriseInfo: {} as EnterpriseCertificationModel,
    record: [],
  });
  async function fetchData() {
    try {
      const { data: resData } = await queryCertification();
      data.value = resData;
    }
    catch (err) {
      // you can report use errorHandler or other
    }
    finally {
      setLoading(false);
    }
  }
  fetchData();
</script>

<style scoped lang="less"></style>
