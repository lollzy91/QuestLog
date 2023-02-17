package com.QuestLog.QuestLog.dao;

import com.QuestLog.QuestLog.model.Quest;

import java.util.List;

public interface QuestDao {
    List<Quest> viewActiveQuests(long userId);
    void addQuest(Quest newQuest);

}
