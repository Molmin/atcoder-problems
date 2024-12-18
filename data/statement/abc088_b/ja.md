配点：$200$ 点  

## 問題文

$N$ 枚のカードがあります. $i$ 枚目のカードには, $a_i$ という数が書かれています.<br>
Alice と Bob は, これらのカードを使ってゲームを行います. ゲームでは, Alice と Bob が交互に 1 枚ずつカードを取っていきます. Alice が先にカードを取ります.<br>
2 人がすべてのカードを取ったときゲームは終了し, 取ったカードの数の合計がその人の得点になります. 2 人とも自分の得点を最大化するように最適な戦略を取った時, Alice は Bob より何点多く取るか求めてください.  

## 制約

- $N$ は $1$ 以上 $100$ 以下の整数
- $a_i \ (1 \leq i \leq N)$ は $1$ 以上 $100$ 以下の整数

## 入力

入力は以下の形式で標準入力から与えられる.  

> $N$
> 
> $a_1$ $a_2$ $a_3$ $...$ $a_N$

## 出力

両者が最適な戦略を取った時, Alice は Bob より何点多く取るかを出力してください.

```input1
2
3 1
```

```output1
2
```

最初, Alice は $3$ が書かれたカードを取ります. 次に, Bob は $1$ が書かれたカードを取ります. 得点差は $3$ - $1$ = $2$ となります.  

```input2
3
2 7 4
```

```output2
5
```

最初, Alice は $7$ が書かれたカードを取ります. 次に, Bob は $4$ が書かれたカードを取ります. 最後に, Alice は $2$ が書かれたカードを取ります. 得点差は, $7$ - $4$ + $2$ = $5$ 点となります.

```input3
4
20 18 2 18
```

```output3
18
```