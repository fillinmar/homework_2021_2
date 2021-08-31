'use strict';

QUnit.module('Тестируем функцию set', function () {
    QUnit.test('set работает правильно c объектами с существующими свойствами', function (assert) {
        const object = {
            deep: {
                hested: {
                    field: 'baz'
                }
            }
        };

        const object2 = {
            deep: {
                hested: {
                    field: 42
                }
            }
        };

        const object3 = {
            deep: {
                hested: {
                    foo: 'bar'
                }
            }
        };

        const object4 = {
            deep: null
        };

        const object5 = {
            deep: {
                hested: null
            }
        };

        assert.deepEqual(set({foo: 'bar'}, '.foo', 'baz'), {foo: 'baz'});
        assert.deepEqual(set(object, '.deep.hested.field', 42), object2);

        assert.deepEqual(set(object, '.deep.hested', {foo: 'bar'}), object3);
        assert.deepEqual(set(object, '.deep.hested', null), object5);
        assert.deepEqual(set(object, '.deep', null), object4);
    });

    QUnit.test('set изменяет переданный объект', function (assert) {
        const object = {
            foo: 'bar'
        };

        const object1 = {
            foo: 'baz'
        };

        const object2 = {
            deep: {
                hested: 43
            }
        };

        const object3 = {
            deep: {
                hested: 0
            }
        };

        const object4 = set(object, '.foo', 'baz');
        const object5 = set(object2, '.deep.hested', 0);
        assert.deepEqual(object, object1);
        assert.deepEqual(object4, object1);
        assert.deepEqual(object5, object3);
    });

    QUnit.test('set работает правильно c массивами', function (assert) {
        const object1 = {
            foo: [1, 2, 3],
            bar: [
                {foobar: '42'}
            ]
        };

        const object2 = {
            foo: [1, 2, 3],
            bar: [
                {foobar: '42'}
            ]
        };

        const new1 = {
            foo: [42, 2, 3],
            bar: [
                {foobar: '42'}
            ]
        };

        const new2 = {
            foo: [1, 2, 3],
            bar: [
                {foobar: 'baz'}
            ]
        };

        assert.deepEqual(set(object1, '.foo.0', 42), new1);
        assert.deepEqual(set(object2, '.bar.0.foobar', 'baz'), new2);
    });

    QUnit.test('set работает правильно c объектами без свойств', function (assert) {
        const object = {
            deep: {
                nested: {
                    field: null
                }
            }
        };

        const object1 = {
            deep: null
        };

        assert.deepEqual(set({}, '.deep.nested.field', null), object);
        assert.deepEqual(set({}, '.deep', null), object1);
    });

    QUnit.test('set работает правильно c объектами, у которых есть свойство с типом boolean', function (assert) {

        const object = {
            deep: {
                nested: {
                    field: true
                }
            }
        };

        const object1 = {
            deep: {
                nested: {
                    field: false
                }
            }
        };

        assert.deepEqual(set(object, '.deep.nested.field', false), object1);
    });

    QUnit.test('set работает правильно c объектами, у которых есть свойство с типом undefined', function (assert) {
        const object = {
            deep: {
                nested: {
                    field: undefined
                }
            }
        };

        const object1 = {
            deep: {
                nested: {
                    field: 42
                }
            }
        };

        assert.deepEqual(set(object, '.deep.nested.field', 42), object1);
    });
});
