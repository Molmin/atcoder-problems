配点 : $300$ 点

## 問題文

$N$ 個の袋があります。<br>
袋 $i$ には $L_i$ 個のボールが入っていて、袋 $i$ の $j(1\leq j\leq L_i)$ 番目のボールには正の整数 $a_{i,j}$ が書かれています。  

それぞれの袋から $1$ つずつボールを取り出します。<br>
取り出したボールに書かれた数の総積が $X$ になるような取り出し方は何通りありますか？  

ただし、書かれた数が同じであっても全てのボールは区別します。

## 制約

- $N \geq 2$
- $L_i \geq 2$
- 袋に入っているボールの個数の総積は $10^5$ を超えない。すなわち、$\displaystyle\prod_{i=1}^{N}L_i \leq 10^5$
- $1 \leq a_{i,j} \leq 10^9$
- $1 \leq X \leq 10^{18}$
- 入力に含まれる値は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$
> 
> $L_1$ $a_{1,1}$ $a_{1,2}$ $\ldots$ $a_{1,L_1}$
> 
> $L_2$ $a_{2,1}$ $a_{2,2}$ $\ldots$ $a_{2,L_2}$
> 
> $\vdots$
> 
> $L_N$ $a_{N,1}$ $a_{N,2}$ $\ldots$ $a_{N,L_N}$

## 出力

答えを出力せよ。  

```input1
2 40
3 1 8 4
2 10 5
```

```output1
2
```

袋 $1$ の $3$ 番目のボールと袋 $2$ の $1$ 番目のボールを選ぶと、$a_{1,3} \times a_{2,1} = 4 \times 10 = 40$ となります。<br>
袋 $1$ の $2$ 番目のボールと袋 $2$ の $2$ 番目のボールを選ぶと、$a_{1,2} \times a_{2,2} = 8 \times 5 = 40$ となります。<br>
これ以外に総積が $40$ になる取り出し方は存在しないので、答えは $2$ です。

```input2
3 200
3 10 10 10
3 10 10 10
5 2 2 2 2 2
```

```output2
45
```

書かれた数が同じであっても全てのボールは区別することに注意してください。  

```input3
3 1000000000000000000
2 1000000000 1000000000
2 1000000000 1000000000
2 1000000000 1000000000
```

```output3
0
```

総積が $X$ になる取り出し方が $1$ つも存在しないこともあります。