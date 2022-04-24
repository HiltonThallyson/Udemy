import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'quiz.dart';
import 'result.dart';

// void main() {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  final _questions = const [
    {
      'questionText': 'What\'s your favorite color?',
      'answers': [
        {"text": "Black", "score": 10},
        {"text": "Blue", "score": 5},
        {"text": "White", "score": 3},
        {"text": "Red", "score": 1}
      ]
    },
    {
      'questionText': 'What\'s your favorite animal?',
      'answers': [
        {"text": "Dog", "score": 3},
        {"text": "Cat", "score": 1},
        {"text": "Bird", "score": 5},
        {"text": "Fish", "score": 10}
      ]
    },
    {
      'questionText': 'Who\'s your favorite instructor?',
      'answers': [
        {"text": "Maxmillian", "score": 1},
        {"text": "Akita", "score": 3},
        {"text": "John", "score": 5},
        {"text": "Will", "score": 10}
      ]
    }
  ];
  var _questionIndex = 0;
  var _totalScore = 0;
  void _answerQuestion(int score) {
    _totalScore += score;
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
<<<<<<< HEAD
        home: Scaffold(
            body: CustomScrollView(
              slivers: [SliverGrid(
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 140.0,
                childAspectRatio: 1.0,
              ),
              delegate: SliverChildBuilderDelegate(
                (BuildContext context, int index) {
                  return Container(
                    alignment: Alignment.center,
                    color: Colors.primaries[Random().nextInt(Colors.primaries.length)],
                  );
                },
                childCount: 20,
              ),
                )],
            )));
=======
      home: Scaffold(
          appBar: AppBar(
            title: Text('My first App'),
          ),
          body: _questionIndex < _questions.length
              ? Quiz(
                  answerQuestion: _answerQuestion,
                  questions: _questions,
                  questionIndex: _questionIndex)
              : Result(_totalScore)),
    );
>>>>>>> 93663e03a5c7205bdee78530158c5a81480c26b6
  }
}
