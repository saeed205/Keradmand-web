<?php

	if ( post_password_required() ) {
		return;
	}

	if ( comments_open() ) {

		echo '<h3 class="cz_cm_ttl">';

			echo '<i class="fa fa-comments mr8" aria-hidden="true"></i>';

			comments_number( 
				do_shortcode( Codevz_Core_Theme::option( 'no_comment', Codevz_Core_Strings::get( 'no_comment' ) ) ), 
				'1 ' . do_shortcode( Codevz_Core_Theme::option( 'comment', Codevz_Core_Strings::get( 'comment' ) ) ), 
				'% ' . do_shortcode( Codevz_Core_Theme::option( 'comments', Codevz_Core_Strings::get( 'comments' ) )  )
			);

		echo '</h3>';

		if ( have_comments() ) {

			echo '<div id="commentlist-container">';

			echo '<ul class="commentlist">';
			wp_list_comments( [ 'avatar_size' => 40 ] );
			echo '</ul>';

			if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) {

				echo '<ul class="page-numbers">';
					echo '<li>' . wp_kses_post( previous_comments_link() ) . '</li>';
					echo '<li>' . wp_kses_post( next_comments_link() ) . '</li>';
				echo '</ul>';

			}

			echo '</div>';

		}

		comment_form();

	}