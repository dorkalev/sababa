require 'rubygems'
require 'json'

class Array
  def maphash
    Hash[*self.reduce([]) { |e,k| e + yield(k) }]
  end
end

def txt_to_json!
  print 'hashing dictionaries/*.txt into db/dictionary.js ..'
  dictionary = Dir.glob("dictionaries/*.txt").maphash do |f|
    print '.'
    [
      f.match(/\/(.*).txt/)[1], 
      Hash[*File.read(f).split("\n\n").map { |x| x.split("\n") }.flatten]
    ]
  end
  dictionary_js = "var dictionary = #{dictionary.to_json};\n#{File.read("_dictkey_subber.js")}"

  File.open("dictionary.js",'w+') { |f| f.puts(dictionary_js) } # new dictionary
  puts ' done'
end

txt_to_json!

