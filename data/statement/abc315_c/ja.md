配点 : $300$ 点

## 問題文

$N$ カップのアイスクリームがあります。<br>
$i$ カップ目の味は $F_i$ 、美味しさは $S_i$ ( $S_i$ は偶数 ) です。  

あなたは、 $N$ 個のカップの中から $2$ つを選んで食べることにしました。<br>
このときの満足度は次のように定義されます。  

- 食べたアイスクリームの美味しさを $s,t$ ( 但し、 $s \ge t$ ) とする。-   - $2$ つのカップの味が異なるなら、満足度は $\displaystyle s+t$ である。
-   - そうでないなら、満足度は $\displaystyle s + \frac{t}{2}$ である。

満足度として達成可能な最大値を求めてください。

## 制約

- 入力は全て整数
- $2 \le N \le 3 \times 10^5$
- $1 \le F_i \le N$
- $2 \le S_i \le 10^9$
- $S_i$ は偶数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $F_1$ $S_1$
> 
> $F_2$ $S_2$
> 
> $\vdots$
> 
> $F_N$ $S_N$

## 出力

答えを整数として出力せよ。

```input1
4
1 4
2 10
2 8
3 6
```

```output1
16
```

$2$ カップ目と $4$ カップ目のアイスを食べることを考えます。  

- $2$ カップ目の味は $2$ 、美味しさは $10$ です。
- $4$ カップ目の味は $3$ 、美味しさは $6$ です。
- 両者の味は異なるので、満足度は $10+6=16$ です。

以上より、満足度 $16$ を達成できます。<br>
満足度を $16$ より大きくすることはできません。

```input2
4
4 10
3 2
2 4
4 12
```

```output2
17
```

$1$ カップ目と $4$ カップ目のアイスを食べることを考えます。  

- $1$ カップ目の味は $4$ 、美味しさは $10$ です。
- $4$ カップ目の味は $4$ 、美味しさは $12$ です。
- 両者の味は同じなので、満足度は $12+\frac{10}{2}=17$ です。

以上より、満足度 $17$ を達成できます。<br>
満足度を $17$ より大きくすることはできません。