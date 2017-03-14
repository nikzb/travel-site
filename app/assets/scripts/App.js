import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const featureRevealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
const testimonialRevealOnScroll = new RevealOnScroll($(".testimonial"), "70%");
