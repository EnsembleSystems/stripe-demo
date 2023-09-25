export const GET_PRODUCTS = `query GET_PRODUCTS($categoryId: [String!]) {
  products(filter: { category_id: { in: $categoryId } }, pageSize: 10 ) {
    total_count
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      small_image {
        url
        label
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}`;

export const GET_PRODUCT_DETAILS = `query GET_PRODUCT_DETAILS($sku: String!) {
  products(filter: {sku: {eq: $sku}}) {
    items {
      id
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      image {
        url
        label
      }
      short_description {
        html
      }
    }
  }
}`;

export const GET_CART = `query GET_CART($cartId: String!) {
  cart(cart_id: $cartId) {
    email
    billing_address {
      city
      country {
        code
        label
      }
      firstname
      lastname
      postcode
      region {
        code
        label
      }
      street
      telephone
    }
    shipping_addresses {
      firstname
      lastname
      street
      city
      region {
        code
        label
      }
      country {
        code
        label
      }
      telephone
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
      }
    }
    items {
      id
      product {
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        small_image {
          url
          label
        }
      }
      quantity
    }
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
    applied_coupons {
      code
    }
    prices {
      grand_total {
        value
        currency
      }
    }
    total_quantity
  }
}`;

export const CREATE_EMPTY_CART = `mutation CREATE_EMPTY_CART {
  createEmptyCart(
    input: { }
  )
}`;

export const ADD_TO_CART = `
mutation ADD_TO_CART($cartId: String!, $productQuantity: Float!, $sku: String!) {
  addSimpleProductsToCart(
    input: {
      cart_id: $cartId
      cart_items: [
        {
          data: {
            quantity: $productQuantity
            sku: $sku
          }
        }
      ]
    }
  ) {
    cart {
      items {
        id
        product {
          name
          sku
        }
        quantity
      }
      total_quantity
    }
  }
}
`;

export const UPDATE_CART_ITEMS = `mutation UPDATE_CART_ITEMS($cartId: String!, $cart_item_id: Int!, $quantity: Float!) {
  updateCartItems(
    input: {
      cart_id: $cartId,
      cart_items: [
        {
          cart_item_id: $cart_item_id
          quantity: $quantity
        }
      ]
    }
  ) {
    cart {
      total_quantity
    }
  }
}`;

export const REMOVE_FROM_CART = `mutation REMOVE_FROM_CART($cartId: String!, $cart_item_id: Int!) {
  removeItemFromCart(
    input: {
      cart_id: $cartId,
      cart_item_id: $cart_item_id
    }
  ) {
    cart {
      total_quantity
    }
  }
}`;

export const GET_CATEGORY_LIST_BY_URL_KEYS = `query GET_CATEGORY_LIST_BY_URL_KEYS($urlKeys: [String!]) {
  categoryList(filters: { url_key: { in: $urlKeys } }) {
    id
    name
    path
    url_path
    url_key
    image
    description
  }
}`;
