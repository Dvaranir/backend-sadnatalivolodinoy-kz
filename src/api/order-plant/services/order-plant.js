'use strict';

/**
 * order-plant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-plant.order-plant');
