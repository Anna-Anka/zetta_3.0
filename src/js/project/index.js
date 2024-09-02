import './sliders/_reviews-slider.js'
import './sliders/_video-reviews-slider.js'
import './sliders/_completed-projects-sliders.js'
import './sliders/_blog-slider.js'
import { showTooltipInProductCard } from './_product-card-tooltip.js'
import { changeBlogImages } from './_blog-images.js'
import { createConveniencePoints, arrangeConveniencePoints } from './_convenience.js'

showTooltipInProductCard();
changeBlogImages();
createConveniencePoints();
arrangeConveniencePoints();
