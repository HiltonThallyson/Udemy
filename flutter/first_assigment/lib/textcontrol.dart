import 'package:flutter/material.dart';
import 'myText.dart';

class TextControl extends StatefulWidget {
  @override
  State<TextControl> createState() => _TextControlState();
}

const DUMMY_TEXT = ['You are nice!', 'Dont giveup', 'Very good!'];

class _TextControlState extends State<TextControl> {
  var _textIndex = 0;

  _changeText() {
    setState(() {
      if (_textIndex < DUMMY_TEXT.length - 1) {
        _textIndex++;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        MyText(DUMMY_TEXT[_textIndex]),
        ElevatedButton(onPressed: _changeText, child: Text('Change Text!')),
      ],
    );
  }
}
