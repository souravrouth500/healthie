import { useInsuranceDetails } from '@/api/hooks/cms/hooks/useInsuranceDetails'
import { useRouter } from 'next/router'
import React from 'react'

function InsuranceDetails() {

    const router = useRouter()
    // let { id } = router.query
    let id;
    id = Number(router?.query?.index)
    console.log(id);

    const {data, error} = useInsuranceDetails(id)

    console.log(data?.data);

    return (
        <div>InsuranceDetails</div>
    )
}

export default InsuranceDetails