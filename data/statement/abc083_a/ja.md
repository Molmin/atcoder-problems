配点 : $100$ 点

## 問題文

上皿天秤は、左の皿に乗っているおもりの重さの合計を $L$ とし、右の皿に乗っているおもりの重さの合計を $R$ としたとき、
$L &gt; R$ なら左に傾き、$L=R$ なら釣り合い、$L&lt;R$ なら右に傾きます。

高橋君は、上皿天秤の左の皿に重さ $A$ のおもりと重さ $B$ のおもりを、右の皿に重さ $C$ のおもりと重さ $D$ のおもりを置きました。

上皿天秤が左に傾くなら `Left` を、釣り合うなら `Balanced` を、右に傾くなら `Right` を出力してください。

## 制約

- $1\leq A,B,C,D \leq 10$
- 入力はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $C$ $D$

## 出力

上皿天秤が左に傾くなら `Left` を、釣り合うなら `Balanced` を、右に傾くなら `Right` を出力せよ。

```input1
3 8 7 1
```

```output1
Left
```

左の皿の上のおもりの重さの合計は $11$ 、右の皿の上のおもりの重さの合計は $8$ です。$11 &gt; 8$ なので、`Left` を出力します。

```input2
3 4 5 2
```

```output2
Balanced
```

左の皿の上のおもりの重さの合計は $7$ 、右の皿の上のおもりの重さの合計は $7$ です。$7=7$ なので、`Balanced` を出力します。

```input3
1 7 6 4
```

```output3
Right
```

左の皿の上のおもりの重さの合計は $8$ 、右の皿の上のおもりの重さの合計は $10$ です。$8&lt;10$ なので、`Right` を出力します。