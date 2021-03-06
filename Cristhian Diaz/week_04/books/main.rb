require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/result' do

    @title = params[:title].capitalize
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
    info = HTTParty.get book_url;
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @authors = info["items"][0]["volumeInfo"]["authors"].join ', '
    @description = info["items"][0]["volumeInfo"]["description"]
    erb :result
  end

