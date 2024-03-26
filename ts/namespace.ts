/**
 * @file 该文件主要用于解释什么是ts的命名空间
*/

/**
 *  ts中使用namespace来定义
 */ 
namespace SomeNameSpaceName { 
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
 }


/**
 *如果需要在外部调用 则需要在类和接口添加export关键字 
 */  
SomeNameSpaceName.SomeClassName;