package com.QuestLog.QuestLog.controller;

import com.QuestLog.QuestLog.dao.QuestDao;
import com.QuestLog.QuestLog.model.Quest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@PreAuthorize("isAuthenticated()")
@RequestMapping(path = "/quests")
public class QuestController {

    @Autowired
    private QuestDao questDao;

    public QuestController(QuestDao questDao) {
        this.questDao = questDao;
    }

    @RequestMapping(path = "/active/{userId}", method = RequestMethod.GET)
    public List<Quest> viewActiveQuests(@PathVariable("userId") long userId){
        return questDao.viewActiveQuests(userId);
    }
    @RequestMapping(path = "/newQuest", method = RequestMethod.POST)
    public void addQuest(@RequestBody Quest newQuest){
        questDao.addQuest(newQuest);
    }
}
