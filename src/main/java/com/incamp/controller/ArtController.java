package com.incamp.controller;


import com.incamp.entity.Art;
import com.incamp.service.ArtService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class ArtController {

    @Autowired
    private ArtService service;

    @RequestMapping(value = "/")
    public List<Art> findForHomePage(HttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        return service.findForHomePage();
    }

    @RequestMapping(value = "/findByOwner")
    public List<Art> findByOwner(HttpServletResponse resp, @RequestParam String search) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        return service.findByOwner(search);
    }

        @RequestMapping(value = "/findByTags",method = RequestMethod.POST)
    public  List<Integer> findByTags(HttpServletResponse resp, @RequestParam String tagIds) {
            JSONObject obj = new JSONObject(tagIds);
            String d = obj.getString("tagIds");
            System.out.println(tagIds+d+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!@##################");
        resp.setHeader("Access-Control-Allow-Origin", "*");
        return null;

    }

}