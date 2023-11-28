# -*- coding: utf-8 -*-

{
    'name': 'Viber Redirect',
    'version': '16.0.1.0.0',
    'category': 'Extra Tools',
    'summary': """
        Viber Redirect button
    """,
    'description': "Add Viber Redirect button",
    'author': 'Vasil Kaliuta',
    'website': 'https://t.me/kaliuta',
    # 'license': 'LGPL-3',
    'license': 'OPL-1',
    "images": ["static/description/main_screenshot.jpeg", "static/description/v2.jpg"],
    'depends': [
        'base',
        'web',
        'mail'
    ],
    'data': [],
    'assets': {
        'mail.assets_discuss_public': [
            'k_res_partner_viber/static/src/components/viber_button/*',
        ],
        'web.assets_backend': [
            'k_res_partner_viber/static/src/components/*/*',
        ],
    },
    'demo': [],
    'installable': True,
    'auto_install': False,
}
