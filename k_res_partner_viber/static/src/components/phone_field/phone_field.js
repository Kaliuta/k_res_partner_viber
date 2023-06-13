/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PhoneField } from "@web/views/fields/phone/phone_field";
import { SendVIButton } from '@k_res_partner_viber/components/viber_button/viber_button';

patch(PhoneField, "k_res_partner_viber.PhoneField", {
    components: {
        ...PhoneField.components,
        SendVIButton
    },
    defaultProps: {
        ...PhoneField.defaultProps,
    },
    props: {
        ...PhoneField.props
    },
    extractProps: ({ attrs }) => {
        return {
            placeholder: attrs.placeholder,
        };
    },
});
