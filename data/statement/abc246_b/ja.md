配点 : $200$ 点

## 問題文

二次元平面上の点 $(0,0)$ から点 $(A,B)$ に向かって距離 $1$ だけ移動します。移動後の座標を求めてください。

ただし、点 $X$ から点 $Y$ に向かって距離 $d$ ($\le$ 線分 $XY$ の長さ) だけ移動すると、線分 $XY$ 上で点 $X$ からの距離が $d$ であるような点に辿りつくものとします。<br>
なお、制約より点 $(0,0)$ と点 $(A,B)$ の距離は $1$ 以上であることが保証されます。

## 制約

- 入力は全て整数
- $0 \le A,B \le 1000$
- $(A,B) \neq (0,0)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$

## 出力

移動後の点を $(x,y)$ とするとき、 $x$ と $y$ をこの順に空白区切りで出力せよ。<br>
なお、各出力について、想定解との絶対誤差または相対誤差が $10^{ - 6}$ 以下であれば正解として扱われる。  

```input1
3 4
```

```output1
0.600000000000 0.800000000000
```

他にも、例えば `0.5999999999 0.8000000001` という出力も許容されます。

```input2
1 0
```

```output2
1.000000000000 0.000000000000
```

点 $(A,B)$ に到着する場合もあります。

```input3
246 402
```

```output3
0.521964870245 0.852966983083
```