配点 : $500$ 点

## 問題文

日本料理店「停止寿司」は円形のカウンターが一つあるだけのシンプルな店です。カウンターの外周の長さは $C$ メートルで、カウンターの内部に客が立ち入ることはできません。

中橋くんが入店し、カウンターのそばまで案内されました。いま、カウンター上には $N$ 貫の寿司が置かれています。そのうち $i$ 貫目は中橋くんがいる位置から $x_i$ メートル時計回りに進んだ位置に置かれており、$v_i$ キロカロリーの栄養価を持ちます。

中橋くんはカウンターの外周を自由に歩き回ることができます。寿司が置かれている位置にたどり着いたら、その寿司を食べて寿司が持つ栄養価を摂取することができます（当然、その寿司は消えます）。ただし、歩く際に $1$ メートルあたり $1$ キロカロリーを消費します。

満足したら、いつでも好きな位置から店を出ることができます（始めにいた位置に戻らなくても構いません）。店を出るまでに最大で差し引き何キロカロリーを摂取することができるでしょうか？すなわち、退店するまでに摂取した栄養価の合計から消費したエネルギーを引いた値の最大値はいくらでしょうか？なお、他に客はおらず、新たな寿司がカウンターに追加されることもないものとします。また、中橋くんは十分な栄養を蓄えているため、どれだけ歩いてエネルギーを消費しても餓死しないものとします。

## 制約

- $1 \leq N \leq 10^5$
- $2 \leq C \leq 10^{14}$
- $1 \leq x_1 &lt; x_2 &lt; ... &lt; x_N &lt; C$
- $1 \leq v_i \leq 10^9$
- 入力中のすべての値は整数である。

## 部分点

- $N \leq 100$ を満たすテストセットに正解すると、$300$ 点が与えられる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $C$
> 
> $x_1$ $v_1$
> 
> $x_2$ $v_2$
> 
> $:$
> 
> $x_N$ $v_N$

## 出力

退店するまでに差し引きで最大 $c$ キロカロリーを摂取できるとき、$c$ の値を出力せよ。

```input1
3 20
2 80
9 120
16 1
```

```output1
191
```

外周 $20$ メートルのカウンターに $3$ 貫の寿司が置かれています。中橋くんの始めの位置から時計回りに $2$ メートル歩くと、$80$ キロカロリーの寿司を食べることができます。さらに時計回りに $7$ メートル歩くと、$120$ キロカロリーの寿司を食べることができます。ここで退店すると、摂取した栄養価の合計は $200$ キロカロリー、消費したエネルギーの合計は $9$ キロカロリーで、差し引き $191$ キロカロリーを摂取することができ、これが最大の値です。

```input2
3 20
2 80
9 1
16 120
```

```output2
192
```

$2$ 貫目と $3$ 貫目の寿司の位置が入れ替わりました。再び、中橋くんの始めの位置から時計回りに $2$ メートル歩くと、$80$ キロカロリーの寿司を食べることができます。今回はここで向きを変え、反時計回りに $6$ メートル歩くと、$120$ キロカロリーの寿司を食べることができます。ここで退店すると、摂取した栄養価の合計は $200$ キロカロリー、消費したエネルギーの合計は $8$ キロカロリーで、差し引き $192$ キロカロリーを摂取することができ、これが最大の値です。

```input3
1 100000000000000
50000000000000 1
```

```output3
0
```

唯一の寿司が $32$ bit 整数に収まらないほど遠くにあるわりに栄養価が低いため、何もせず直ちに退店するべきです。

```input4
15 10000000000
400000000 1000000000
800000000 1000000000
1900000000 1000000000
2400000000 1000000000
2900000000 1000000000
3300000000 1000000000
3700000000 1000000000
3800000000 1000000000
4000000000 1000000000
4100000000 1000000000
5200000000 1000000000
6600000000 1000000000
8000000000 1000000000
9300000000 1000000000
9700000000 1000000000
```

```output4
6500000000
```

以上のすべての入力例は、部分点のためのテストセットに含まれます。