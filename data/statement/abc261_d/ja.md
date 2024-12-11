配点 : $400$ 点

## 問題文

高橋君が $N$ 回コイントスを行います。
また、高橋君はカウンタを持っており、最初カウンタの数値は $0$ です。

$i$ 回目のコイントスで表裏のどちらが出たかによって、次のことが起こります。

- 表が出たとき：高橋君はカウンタの数値を $1$ 増やし、$X_i$ 円もらう。
- 裏が出たとき：高橋君はカウンタの数値を $0$ に戻す。お金をもらうことは出来ない。

また、$M$ 種類の連続ボーナスがあり、$i$ 種類目の連続ボーナスではカウンタの数値が $C_i$ になる**たびに** $Y_i$ 円もらうことができます。

高橋君は最大で何円もらうことができるかを求めてください。

## 制約

- $1\leq M\leq N\leq 5000$
- $1\leq X_i\leq 10^9$
- $1\leq C_i\leq N$
- $1\leq Y_i\leq 10^9$
- $C_1,C_2,\ldots,C_M$ はすべて異なる。
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$
> 
> $C_1$ $Y_1$
> 
> $C_2$ $Y_2$
> 
> $\vdots$
> 
> $C_M$ $Y_M$

## 出力

高橋君がもらうことのできる金額の最大値を整数で出力せよ。

```input1
6 3
2 7 1 8 2 8
2 10
3 1
5 5
```

```output1
48
```

順に 表, 表, 裏, 表, 表, 表 が出た時、もらえる金額は次のようになります。

- $1$ 回目のコイントスで表が出る。カウンタの数値を $0$ から $1$ にして、$2$ 円もらう。
- $2$ 回目のコイントスで表が出る。カウンタの数値を $1$ から $2$ にして、$7$ 円もらう。さらに、連続ボーナスとして $10$ 円もらう。
- $3$ 回目のコイントスで裏が出る。カウンタの数値を $2$ から $0$ にする。
- $4$ 回目のコイントスで表が出る。カウンタの数値を $0$ から $1$ にして、$8$ 円もらう。
- $5$ 回目のコイントスで表が出る。カウンタの数値を $1$ から $2$ にして、$2$ 円もらう。さらに、連続ボーナスとして $10$ 円もらう。
- $6$ 回目のコイントスで表が出る。カウンタの数値を $2$ から $3$ にして、$8$ 円もらう。さらに、連続ボーナスとして $1$ 円もらう。

このとき高橋君は合計で $2+(7+10)+0+8+(2+10)+(8+1)=48$ 円もらうことができ、このときが最大です。<br>
連続ボーナスはカウンタの数値が $C_i$ になるたびに何度でももらえることに注意してください。<br>
ちなみに、$6$ 回のコイントスで全部表が出た時は $2+(7+10)+(1+1)+8+(2+5)+8=44$ 円しかもらうことが出来ず、この時は最大ではありません。

```input2
3 2
1000000000 1000000000 1000000000
1 1000000000
3 1000000000
```

```output2
5000000000
```

答えが $32$ bit 整数型に収まらないこともあることに注意してください。