package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class GamesController {

	@RequestMapping("")
	public String showTopPage() {
		return "index";
	}
	
	@RequestMapping("/omikuji")
	public String showOmikuji() {
		return "omikuji";
	}
	
	@RequestMapping("/typing")
	public String showTyping() {
		return "typing";
	}
	
	@RequestMapping("/stopWatch")
	public String showStopWatch() {
		return "stop_watch";
	}
	
	@RequestMapping("/quiz")
	public String showQuiz() {
		return "quiz";
	}
	
	@RequestMapping("/slideshow")
	public String slideshow() {
		return "slide_show";
	}
	
}
