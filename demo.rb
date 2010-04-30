require 'rubygems'
require 'rack'
require 'thin'

builder = Rack::Builder.new do
  use Rack::CommonLogger

  map '/' do
    run Proc.new {|env| 
      [200, {"Content-Type" => "text/html"}, File.open("demo/demo.html") ]
    }
  end

  map '/demo/' do
    run Proc.new {|env| 
      [200, {"Content-Type" => "text/html"}, File.open("demo/demo_#{env["REQUEST_PATH"].split("/")[2]}.html") ]
    }
  end

  map '/dictionary.js' do
    run Proc.new {|env| 
      # xxx, action, key, value = env["REQUEST_PATH"].split("/")
      # REDIS[key.to_s] = value.to_s
      [200, {"Content-Type" => "text/html"}, File.open("dictionary.js") ]
    }
  end

end

Rack::Handler::Thin.run builder, :Port => 3000