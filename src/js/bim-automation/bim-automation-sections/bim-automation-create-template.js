import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import faqHBS from '../../../templates/faq.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { architecAndStruct } from './bim-automation-data';

useTemplate(refs.services, servicesHBS, architecAndStruct);