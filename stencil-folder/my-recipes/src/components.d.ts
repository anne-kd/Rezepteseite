/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TitleTitleimage {
        "btnText": string;
        "imageAlt": string;
        "imageUrl": string;
        "pageTitle": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTitleTitleimageElement extends Components.TitleTitleimage, HTMLStencilElement {
    }
    var HTMLTitleTitleimageElement: {
        prototype: HTMLTitleTitleimageElement;
        new (): HTMLTitleTitleimageElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "title-titleimage": HTMLTitleTitleimageElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TitleTitleimage {
        "btnText"?: string;
        "imageAlt"?: string;
        "imageUrl"?: string;
        "pageTitle"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "title-titleimage": TitleTitleimage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "title-titleimage": LocalJSX.TitleTitleimage & JSXBase.HTMLAttributes<HTMLTitleTitleimageElement>;
        }
    }
}
