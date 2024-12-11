配点 : $200$ 点

## 問題文

高橋君のスマートフォンのバッテリー容量は $N$ [mAh] であり、時刻 $0.5, 1.5, 2.5, \ldots$ に、つまり時刻 $n + 0.5\,(n$ は整数$)$ を迎える度にバッテリー残量が $1$ [mAh] ずつ減少します。<br>
高橋君はスマートフォンを満充電した状態で時刻 $0$ に外出し、途中で $M$ 回カフェを訪れ、時刻 $T$ に帰宅します。<br>
$i$ 回目に訪れるカフェには時刻 $A_i$ から時刻 $B_i$ まで滞在します。カフェに滞在している間はスマートフォンを充電するため、バッテリー残量は減少せず、代わりに時刻 $n + 0.5\,(n$ は整数$)$ を迎える度に $1$ [mAh] ずつ増加します。ただし既にバッテリー残量がバッテリー容量と等しい場合、バッテリー残量は増えも減りもしません。<br>
高橋君が途中でスマートフォンのバッテリー残量が $0$ になることなく帰宅することができるかを判定してください。  

## 制約

- $1 \le N \le 10^9$
- $1 \le M \le 1000$
- $1 \le T \le 10^9$
- $0 \lt A_1 \lt B_1 \lt A_2 \lt B_2 \lt A_3 \lt B_3 \lt \dots \lt A_M \lt B_M \lt T$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $T$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $A_3$ $B_3$
> 
> $\hspace{15pt} \vdots$
> 
> $A_M$ $B_M$

## 出力

高橋君が途中でスマートフォンのバッテリー残量が $0$ になることなく帰宅することができるなら `Yes` を、できないなら `No` を出力せよ。  

```input1
10 2 20
9 11
13 17
```

```output1
Yes
```

バッテリー残量は以下のように変化します。

- 時刻 $0$ (出発時): $10$ [mAh]
- 時刻 $9$ ($1$ 番目のカフェへの滞在開始時): $1$ [mAh]
- 時刻 $11$ ($1$ 番目のカフェへの滞在終了時): $3$ [mAh] (カフェでは充電を行います)
- 時刻 $13$ ($2$ 番目のカフェへの滞在開始時): $1$ [mAh]
- 時刻 $17$ ($2$ 番目のカフェへの滞在終了時): $5$ [mAh]
- 時刻 $20$ (帰宅時): $2$ [mAh]

この過程で一度もバッテリー残量が $0$ になっていないので、`Yes` を出力します。  

```input2
10 2 20
9 11
13 16
```

```output2
No
```

$2$ 番目のカフェへの滞在をバッテリー残量 $1$ [mAh] の状態で開始するところまでは入出力例 1 と同じです。<br>
時刻 $16$ に $2$ 番目のカフェの滞在を終了したときのバッテリー残量は $4$ [mAh] になります。<br>
そして時刻 $19.5$ にバッテリー残量が $0$ になってしまうので、`No` を出力します。  

```input3
15 3 30
5 8
15 17
24 27
```

```output3
Yes
```

帰宅するときにはバッテリー残量が $1$ [mAh] になっていますが、 $1$ 度も $0$ にはなっていません。  

```input4
20 1 30
20 29
```

```output4
No
```

時刻 $19.5$ でバッテリー残量が $0$ になります。  

```input5
20 1 30
1 10
```

```output5
No
```

バッテリー残量がバッテリー容量と等しい場合は、カフェにいてもバッテリー残量が増えないことに注意して下さい。