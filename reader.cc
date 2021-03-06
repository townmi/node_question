// reader.cc
#include <node.h>
#include <node_buffer.h>
#include <iostream>
#include "jpeg-9a/jpeglib.h"

namespace CreateObject {

    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::String;
    using v8::Value;
    using v8::Exception;

    int GetNum (const char* buffer) {

        struct jpeg_decompress_struct cinfo;
        struct jpeg_error_mgr jerr;

        cinfo.err = jpeg_std_error(&jerr);

        jpeg_create_decompress(&cinfo);

//        jpeg_stdio_dest(&cinfo, *buffer);

//        jpeg_stdio_src(&cinfo, *buffer);

//        (void) jpeg_read_header(&cinfo, TRUE);
//
//        (void) jpeg_start_decompress(&cinfo);


        printf("%s\n", "打印char数组");

        std::cout << buffer << std::endl;
        std::cout << *buffer << std::endl;

        return 1234;

    }

    void CreateObject(const FunctionCallbackInfo<Value>& args) {

        Isolate* isolate = args.GetIsolate();

        if(!node::Buffer::HasInstance(args[0])) { //判断是否是Buffer对象
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate, "参数必须是Buffer类型!")));
            return;
        }

        size_t size = node::Buffer::Length(args[0]->ToObject());

        std::cout << "打印buffer长度c++－－》" << size << std::endl;

        char *buf = node::Buffer::Data(args[0]->ToObject());

        args.GetReturnValue().Set(GetNum(buf));

    }

    void Init(Local<Object> exports, Local<Object> module) {
        NODE_SET_METHOD(module, "exports", CreateObject);
    }

    NODE_MODULE(binding, Init);
}
