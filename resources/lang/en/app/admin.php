<?php 

/**
 * Admin Page Locale
 * If there are many locales for admin  its better to make it a folder.
 * For the meantime we could consider one file first to make it work.
 * @author Rej Mediodia
 */
return [
    'page' => [
        'title' => 'Shop It - Admin'
    ],
    'success' => [
        'save' => 'Product Successfully Saved.'
    ],
    'product' => [
        'head' => [  
            'title' => 'Products Management',
            'description' => 'Manage your products here.'
        ],
        'form' => [
            'name' => [
                'label' => 'Product Name',
                'placeholder' => 'Enter Product Name'
            ],
            'description' => [
                'label' => 'Product Description',
                'placeholder' => 'Enter Product Description'
            ],
            'currency' => [
                'label' => 'Select Currency',
                'placeholder' => 'Please Select Currency'
            ],
            'price' => [
                'label' => 'Product Price',
                'placeholder' => 'Enter Product Price'
            ],
            'discount' => [
                'label' => 'Product Discount',
                'placeholder' => 'Enter Product Discount'
            ],
            'product_type' => [
                'label' => 'Select Product Type',
                'placeholder' => 'Please Select Product Type'
            ],
        ],
        'button' => [
            'add' => [
                'title' => 'Add New Product',
                'name' => 'Add'
            ],
            'save' => [
                'title' => 'Save Product',
                'name' => 'Save'
            ]
        ]
    ]
];