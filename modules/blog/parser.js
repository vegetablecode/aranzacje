import classNames from 'common/utils/classNames';
import { domToReact } from 'html-react-parser';

const parser = (node) => {
  if (node.type === 'tag') {
    let elementClasses;
    switch (node.name) {
      case 'h2':
        elementClasses =
          'text-2xl border-b pb-2 mb-2 pt-8 border-white w-full font-bold pt-4';
        break;
      case 'h3':
        elementClasses = 'text-xl font-bold pb-2 pt-4';
        break;
      case 'h1':
        elementClasses = 'text-3xl pt-6 font-black pb-6';
        break;
      case 'p':
        elementClasses = 'py-2';
        break;
      case 'blockquote':
        elementClasses = 'border-l-4 border-gray-500 pl-4 py-4 my-6 italic';
        break;
      case 'ul':
        elementClasses = 'list-disc pl-4 py-4';
        break;
      case 'img':
        elementClasses = 'card';
        break;
      case 'strong':
        elementClasses = 'font-semibold';
        break;
      default:
        elementClasses = '';
    }

    const newClass = classNames(elementClasses, node.attribs.class);
    node.attribs.class = newClass;
  }

  return domToReact([node], parser);
};

export default parser;
