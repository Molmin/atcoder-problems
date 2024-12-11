配点 : $600$ 点

## 問題文

机の上に $N$ 枚のクッキーがあります。クッキーの表面にはそれぞれ正の整数 $A_1, A_2, \dots, A_N$ が書かれており、これらはすべて異なります。

このクッキーを使って 2 人でゲームを行います。このゲームでは、各プレイヤーは次の行動を交互に行います。

机にあるクッキーを 1 枚選んで食べる。<br>
その際に、机に残ったクッキーに書かれた整数の $\mathrm{XOR}$ が $0$ になったならば、そのプレイヤーは勝利し、ゲームは終了する。

あなたは E869120 君に対戦を申し込みました。あなたは先手で、E869120 君は後手です。さて、両者が最適に行動したときに、あなたは E869120 君に勝ちますか？

    
        $\mathrm{XOR}$ とは
    
    

        整数 $A, B$ のビット単位 XOR、$A\ \mathrm{XOR}\ B$ は、以下のように定義されます。
        

- $A\ \mathrm{XOR}\ B$ を二進表記した際の $2^k$ ($k \geq 0$) の位の数は、$A, B$ を二進表記した際の $2^k$ の位の数のうち一方のみが $1$ であれば $1$、そうでなければ $0$ である。

        例えば、$3\ \mathrm{XOR}\ 5 = 6$ となります (二進表記すると: $011\ \mathrm{XOR}\ 101 = 110$)。  
        一般に、$k$ 個の整数 $p_1, p_2, p_3, \dots, p_k$ のビット単位 XOR は $(\dots ((p_1\ \mathrm{XOR}\ p_2)\ \mathrm{XOR}\ p_3)\ \mathrm{XOR}\ \dots\ \mathrm{XOR}\ p_k)$ と定義され、これは $p_1, p_2, p_3, \dots p_k$ の順番によらないことが証明できます。特に $k = 0$ の場合、$\mathrm{XOR}$ は $0$ となります。  
    

## 制約

- $1 \leq N \leq 400000$
- $1 \leq A_i \leq 10^9 \ (1 \leq i \leq N)$
- $A_1, A_2, \dots, A_N$ はすべて異なる
- $A_1, A_2, \dots, A_N$ の $\mathrm{XOR}$ は $0$ ではない
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。  

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

両者が最適に行動したときにあなたが勝つなら `Win`、負けるなら `Lose` と出力してください。

```input1
6
9 14 11 3 5 8
```

```output1
Lose
```

この例では、あなたがどんな方法を使っても、E869120 君が最適に行動し続ければ負けてしまいます。

例えば、最初に $11$ が書かれたクッキーを食べるとしましょう。すると、次に E869120 君が $9$ が書かれたクッキーを食べることで、残ったクッキーに書かれた数 $14, 3, 5, 8$ の $\mathrm{XOR}$ が $0$ になるので、E869120 君が勝ちます。

それ以外の行動をとっても、最終的には E869120 君が勝ちます。

```input2
1
131
```

```output2
Win
```

この例では、あなたは最初のターンで $131$ が書かれたクッキーを食べることしかできません。すると、机の上からクッキーがなくなるので、残ったクッキーに書かれた数の $\mathrm{XOR}$ は $0$ になります。したがって、E869120 君が何もできないまま、あなたが勝ちます。

```input3
8
12 23 34 45 56 78 89 98
```

```output3
Win
```