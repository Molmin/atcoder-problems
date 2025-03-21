配点 : $100$ 点

## 問題文

$1$ から $N$ の番号が付けられた $N$ 人の人がおり、この中で一対一の勝敗のつくゲームを何度か行いました。$N$ 人は最初にそれぞれ持ち点として $0$ を持っており、各ゲームでは勝者の持ち点が $1$ 増え、敗者の持ち点が $1$ 減ります（持ち点が負になることもあります）。最終的に人 $i\ (1\leq i\leq N-1)$ の持ち点が $A_i$ になったとき、人 $N$ の持ち点を求めてください。なお、ゲームの進行によらず最終的な人 $N$ の持ち点は一意に定まることが示せます。

## 制約

- $2\leq N\leq 100$
- $-100\leq A_i\leq 100$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_{N-1}$

## 出力

答えを出力せよ。

```input1
4
1 -2 -1
```

```output1
2
```

最終的に人 $1,2,3$ の持ち点が $1,-2,-1$ となるような進行として、例えば次のようなものが考えられます。

- 最初、人 $1,2,3,4$ の持ち点はそれぞれ $0,0,0,0$ である。
- 人 $1$ と $2$ が対戦して、人 $1$ が勝利する。$4$ 人の持ち点はそれぞれ $1,-1,0,0$ である。
- 人 $1$ と $4$ が対戦して、人 $4$ が勝利する。$4$ 人の持ち点はそれぞれ $0,-1,0,1$ である。
- 人 $1$ と $2$ が対戦して、人 $1$ が勝利する。$4$ 人の持ち点はそれぞれ $1,-2,0,1$ である。
- 人 $2$ と $3$ が対戦して、人 $2$ が勝利する。$4$ 人の持ち点はそれぞれ $1,-1,-1,1$ である。
- 人 $2$ と $4$ が対戦して、人 $4$ が勝利する。$4$ 人の持ち点はそれぞれ $1,-2,-1,2$ である。

この場合、人 $4$ の持ち点は $2$ になります。ほかにも別の進行が考えられますが、どのような進行であっても人 $4$ の持ち点は $2$ になります。

```input2
3
0 0
```

```output2
0
```

```input3
6
10 20 30 40 50
```

```output3
-150
```