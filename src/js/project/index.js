import './sliders/_hero-home-slider.js'
import './sliders/_reviews-slider.js'
import './sliders/_video-reviews-slider.js'
import './sliders/_completed-projects-sliders.js'
import './sliders/_blog-slider.js'
import './sliders/_product-projects-slider.js'
import './sliders/_other-solutions-slider.js'
import './sliders/_product-about-slider.js'
import { fixedHeader } from './_fixed-header.js'
import { changeColorSideMenu } from './_side-menu.js'
import { changeBlogImages } from './_blog-images.js'
import { createConveniencePoints, arrangeConveniencePoints } from './_convenience.js'

fixedHeader();
changeColorSideMenu();
changeBlogImages();
createConveniencePoints();
arrangeConveniencePoints();
