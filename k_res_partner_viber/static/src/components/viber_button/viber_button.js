/** @odoo-module **/

import { useInputField } from "@web/views/fields/input_field_hook";

const { Component } = owl;

export class SendVIButton extends Component {
    setup() {
        useInputField({ getValue: () =>  this.props.value || '' });
    }
    get formattedPhone() {
        let phone = this.props.value;
        return phone.replace("+", "");
    }
};
SendVIButton.template = "k_res_partner_viber.SendVIButton";
