import 'package:flutter/material.dart';

import '/widgets/main_drawer.dart';

class SettingsScreen extends StatefulWidget {
  static const routeName = 'settings';

  final Function saveFilters;
  final Map<String, bool> currentFilters;

  SettingsScreen(this.saveFilters, this.currentFilters);

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  var _gluten_free = false;
  var _lactose_free = false;
  var _vegetarian = false;
  var _vegan = false;

  @override
  void initState() {
    _gluten_free = widget.currentFilters['gluten'];
    _lactose_free = widget.currentFilters['lactose'];
    _vegetarian = widget.currentFilters['vegetarian'];
    _vegan = widget.currentFilters['vegan'];
    super.initState();
  }

  Widget _buildSwitchListTile(String title, String description,
      bool currentValue, Function updateValue) {
    return SwitchListTile(
        title: Text(title),
        subtitle: Text(description),
        value: currentValue,
        onChanged: updateValue);
  }

  void saveFilters() {
    Map<String, bool> _selectedFilters = {
      'gluten': _gluten_free,
      'lactose': _lactose_free,
      'vegetarian': _vegetarian,
      'vegan': _vegan
    };

    widget.saveFilters(_selectedFilters);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Settings'),
          actions: [IconButton(onPressed: saveFilters, icon: Icon(Icons.save))],
        ),
        drawer: MainDrawer(),
        body: Column(
          children: [
            Container(
              padding: EdgeInsets.all(20),
              child: Text(
                'Adjust your meal selection.',
                style: Theme.of(context).textTheme.headline6,
              ),
            ),
            Expanded(
                child: ListView(
              children: [
                _buildSwitchListTile(
                    'Gluten-free',
                    'Only include gluten-free meals.',
                    _gluten_free, (newValue) {
                  setState(() {
                    _gluten_free = newValue;
                  });
                }),
                _buildSwitchListTile(
                    'Lactose-free',
                    'Only include lactose-free meals.',
                    _lactose_free, (newValue) {
                  setState(() {
                    _lactose_free = newValue;
                  });
                }),
                _buildSwitchListTile(
                    'Vegetarian', 'Only include vegetarian meals.', _vegetarian,
                    (newValue) {
                  setState(() {
                    _vegetarian = newValue;
                  });
                }),
                _buildSwitchListTile(
                    'Vegan', 'Only include vegan meals.', _vegan, (newValue) {
                  setState(() {
                    _vegan = newValue;
                  });
                }),
              ],
            ))
          ],
        ));
  }
}
